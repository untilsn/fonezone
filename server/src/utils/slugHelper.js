import latinize from "latinize";
import slugify from "slugify";

export const generalSlug = (name) => {
  if (!name) return "";
  return slugify(latinize(name), { lower: true, trim: true })
}