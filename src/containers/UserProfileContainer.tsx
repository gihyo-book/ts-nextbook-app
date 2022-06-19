import UserProfile from 'components/organisms/UserProfile'
import useUser from 'services/users/use-user'
import type { ApiContext, User } from 'types'

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

interface UserProfileContainerProps {
  userId: number
  user?: User
}

/**
 * ユーザープロフィールコンテナ
 */
const UserProfileContainer = ({ userId, user }: UserProfileContainerProps) => {
  // ユーザー情報
  const { user: u } = useUser(context, { id: userId, initial: user })

  if (!u) return <div>Loading...</div>

  return (
    <UserProfile
      username={`${u.username} (${u.displayName})`}
      profileImageUrl={u.profileImageUrl}
      numberOfProducts={100}
      description={u.description}
    />
  )
}

export default UserProfileContainer
