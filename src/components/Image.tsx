import Image from 'next/image'
import testImage from '../../public/image.png'

export const ImageComponent = () => {
    return (
      <Image
        src={testImage}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    )
  }