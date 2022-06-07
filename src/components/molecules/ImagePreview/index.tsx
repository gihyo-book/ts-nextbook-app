import styled from 'styled-components'
import { CloseIcon } from 'components/atoms/IconButton'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

const ImagePreviewContainer = styled(Box)`
  position: relative;
`

const CloseBox = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 0 6px 0 6px;
  background-color: rgba(44, 44, 44, 0.66);
  cursor: pointer;
`

interface ImagePreviewProps {
  src?: string
  alt?: string
  height?: string
  width?: string
  onRemove?: (src: string) => void
}

/**
 * イメージプレビュー
 */
const ImagePreview: React.FC<ImagePreviewProps> = ({
  src,
  alt,
  height,
  width,
  onRemove,
}: ImagePreviewProps) => {
  // 閉じるボタンを押したらonRemoveを呼ぶ
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onRemove && src && onRemove(src)

    return false
  }

  return (
    <ImagePreviewContainer height={height} width={width}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} height={height} width={width} />
      <CloseBox
        alignItems="center"
        justifyContent="center"
        onClick={handleCloseClick}
      >
        <CloseIcon size={24} color="white" />
      </CloseBox>
    </ImagePreviewContainer>
  )
}

export default ImagePreview
