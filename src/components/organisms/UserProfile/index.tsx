import ShapeImage from 'components/atoms/ShapeImage'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

interface UserProfileProps {
  variant?: 'normal' | 'small'
  username: string
  profileImageUrl: string
  numberOfProducts: number
  description?: string
}

/**
 * ユーザープロファイル
 */
const UserProfile: React.FC<UserProfileProps> = ({
  variant = 'normal',
  username,
  profileImageUrl,
  numberOfProducts,
  description,
}: UserProfileProps) => {
  const profileImageSize = variant === 'small' ? '100px' : '120px'

  return (
    <Flex>
      <Box minWidth={profileImageSize}>
        <ShapeImage
          shape="circle"
          quality="85"
          src={profileImageUrl}
          alt={username}
          height={profileImageSize}
          width={profileImageSize}
        />
      </Box>
      <Box padding="var(--size-spaces-1)">
        <Flex
          height="100%"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Text as="p" fontWeight="bold" variant="mediumLarge" mt={0} mb={1}>
              {username}
            </Text>
            <Text mb={1} mt={0} as="p">
              {numberOfProducts}点出品済
            </Text>
            {variant === 'normal' && (
              <Text m={0} as="p">
                {description}
              </Text>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default UserProfile
