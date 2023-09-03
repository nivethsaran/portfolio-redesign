import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Photos() {
  return (
    <>
      <PageSEO title={`Photos - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="mt-6 divide-y divide-gray-200 px-2 dark:divide-gray-700 sm:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            photography projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            assortment of photos I've taken
          </p>
        </div>
      </div>
    </>
  )
}
