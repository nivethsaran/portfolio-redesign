import Image from './Image'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import Tag from '@/components/Tag'
import SocialIcon from '@/components/social-icons'

const Card = ({ title, description, imgSrc, href, demo, tags }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <Link href={href} aria-label={`Link to ${title}`}>
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        }
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-gray-800 dark:text-gray-400">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose prose-lg mb-3 max-w-none text-gray-500 sm:prose-xl dark:text-gray-400">
            {description}
          </p>
          <div className="flex flex-wrap pb-5 pt-2">
            {tags.map((tag) => (
              <a
                key={tag}
                className="m-1 rounded-lg border border-primary-500 px-3 py-1 text-sm font-medium uppercase text-primary-500 transition duration-500 ease-in-out"
              >
                {tag.split(' ').join('-')}
              </a>
            ))}
          </div>
          <div className="mb-3 flex space-x-4">
            {demo && (
              <Link
                href={demo}
                className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Link to ${title}`}
              >
                Demo &rarr;
              </Link>
            )}
          </div>
        </div>
      </div>
    </Link>
  </div>
)

export default Card
