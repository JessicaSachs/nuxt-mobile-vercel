import { UTApi } from "uploadthing/server";

type UTFile = (ReturnType<typeof UTApi.prototype.listFiles> extends PromiseLike<infer U> ? U : never)[number];

interface MyFile extends UTFile {
  url?: string;
}

export default defineEventHandler(async () => {
  const uploadthingApi = new UTApi({
    apiKey: process.env.UPLOADTHING_SECRET,
  });

  const files: MyFile[] = await uploadthingApi.listFiles({});
  const urls = await uploadthingApi.getFileUrls(files.map(({ key }) => key));
  for (const file of files) {
    const result = urls.find(({ key }) => file.key === key);
    if (!result) {
      // TODO when would the file url not exist?
      // No idea. Definitely screwed though.
    } else {
      file.url = result.url;
    }
  }

  return {
    files,
  };
});
