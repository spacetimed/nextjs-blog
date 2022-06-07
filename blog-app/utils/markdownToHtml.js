// Credits: https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/markdownToHtml.js

import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {

    const result = await remark()
        .use(html)
        .process(markdown)

    return result.toString()
}