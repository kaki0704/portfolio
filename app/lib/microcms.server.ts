import type { BlogPost, MicroCMSListResponse } from "~/types/blog";

export interface MicroCMSQueries {
  draftKey?: string;
  limit?: number;
  offset?: number;
  orders?: string;
  q?: string;
  fields?: string;
  ids?: string;
  filters?: string;
  depth?: number;
}

/**
 * MicroCMS APIにリクエストを送信
 */
async function fetchMicroCMS<T>(
  env: Env,
  endpoint: string,
  contentId?: string,
  queries?: MicroCMSQueries
): Promise<T> {
  if (!env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
  }

  if (!env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
  }

  // クエリパラメータを構築
  const searchParams = new URLSearchParams();
  if (queries) {
    Object.entries(queries).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
  }

  const queryString = searchParams.toString();
  const url = contentId
    ? `https://${env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${endpoint}/${contentId}${queryString ? `?${queryString}` : ""}`
    : `https://${env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${endpoint}${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("MicroCMS API Error:", {
      url,
      status: response.status,
      statusText: response.statusText,
      error: errorText,
    });
    throw new Error(
      `MicroCMS API Error: ${response.status} ${response.statusText} - ${errorText}`
    );
  }

  return response.json();
}

/**
 * ブログ記事一覧を取得
 */
export const getBlogList = async (
  env: Env,
  queries?: MicroCMSQueries
): Promise<MicroCMSListResponse<BlogPost>> => {
  return await fetchMicroCMS<MicroCMSListResponse<BlogPost>>(
    env,
    "blogs",
    undefined,
    queries
  );
};

/**
 * ブログ記事の詳細を取得
 */
export const getBlogDetail = async (
  env: Env,
  contentId: string,
  queries?: MicroCMSQueries
): Promise<BlogPost> => {
  return await fetchMicroCMS<BlogPost>(env, "blogs", contentId, queries);
};
