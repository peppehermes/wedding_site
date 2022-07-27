import { Client } from '@notionhq/client'
import { NotionToMarkdown } from "notion-to-md"

class StoryRepo {
    #client = new Client({
        auth: import.meta.env.VITE_NOTION_SECRET,
    })
    getStory = async () => {
        const n2m = new NotionToMarkdown({ notionClient: this.#client });

        const mdblocks = await n2m.pageToMarkdown(import.meta.env.VITE_STORY_PAGE_ID);
        const mdString = n2m.toMarkdownString(mdblocks);

        return mdString
    }
}

export const storyRepo = new StoryRepo()
