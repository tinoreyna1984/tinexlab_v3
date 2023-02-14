import { bucket } from "./cosmic-api";

export const Loader = async () => {
    const projectsBucket = await bucket.objects
    .find({
      type: "projects", // Object Type slug
    })
    .props("title,slug,metadata"); // response properties

  const projectsArray = await projectsBucket.objects;

  const tagsBucket = await bucket.objects
    .find({
      type: "tags", // Object Type slug
    })
    .props("title,slug"); // response properties

  const tags = await tagsBucket.objects;

  const projects = projectsArray.map(
    project => {
      const {title, slug, metadata} = project;
      const {tags, info, image} = metadata;
      const tagSlugs = tags.map(tag => tag.slug)
      const tagTitle = tags.map(tag => tag.title)
      const {title_en, content, content_en, repo, site, year} = info;
      const {url : imageUrl} = image;
      return {title, slug, tagSlugs, tagTitle, title_en, content, content_en, repo, site, year, imageUrl}
    }
  );

  return {projects, tags};
}