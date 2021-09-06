import type { NextPage } from 'next'
import Link from 'next/link'
import { Typography } from 'antd'

const Home: NextPage = () => {
  return (
    <div>
      <Typography.Title>
        TITLE
      </Typography.Title>

      <Link href="/test">
        Test
        </Link>
    </div>
  )
}

export default Home
