export type CreatePayload = {
  name: string;
  type: string;
  image_url: string;
};
export const validateCreatePayload = (payload: CreatePayload) => {
  if (!payload.name || !payload.type || !payload.image_url) return false;

  try {
    new URL(payload.image_url);
  } catch {
    return false;
  }
  return true;
};
