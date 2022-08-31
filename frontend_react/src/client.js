import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	//projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
	projectId: "ya16qjcb",
	dataset: "production",
	apiVersion: "2022-02-01",
	useCdn: true,
	token: "skyMzXVkyYm5NbmkrJJ8ZhBFqEyAWV3W0da16FoSAWbn7LFpRY1CmjUmZ4SHIq7StMbkw9z6fcW1IieedFhD3tUnsfjxyz14uboBNDKyDsbnOZoYnktJxfRyyJSZnz2OkktIy0gv1zT7qdU2TUJPKV8FqmCW2axrZAgLpGqEyJaFwPy5ebrb",
	//token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
