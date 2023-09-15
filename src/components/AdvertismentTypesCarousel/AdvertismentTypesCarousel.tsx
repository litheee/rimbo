import { useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import { AdvertismentType } from 'components'

import 'swiper/css'
import styles from './AdvertismentTypesCarousel.module.scss'

import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow-right.svg'

const advertisments = [
  {
    name: 'IBV',
    value: 0.2,
    growth: 7.55
  },
  {
    name: 'Banner',
    value: 0.15,
    growth: 1.63
  },
  {
    name: 'VAST',
    value: 0.6,
    growth: 2.55
  },
  {
    name: 'Rewarded video',
    value: 0.8,
    growth: -3.32
  },
  {
    name: 'Native',
    value: 1,
    growth: -3.32
  },
  {
    name: 'IBV 2',
    value: 0.2,
    growth: 7.55
  },
  {
    name: 'Banner 2',
    value: 0.15,
    growth: 1.63
  },
  {
    name: 'VAST 2',
    value: 0.6,
    growth: 2.55
  },
  {
    name: 'Rewarded',
    value: 0.8,
    growth: -3.32
  },
  {
    name: 'Native 2',
    value: 1,
    growth: -3.32
  }
]

export const AdvertismentTypesCarousel = () => {
  const swiperRef = useRef<SwiperType>()
  const [carouselIdx, setCarouselIdx] = useState(0)

  const isPrevSlideAvailable = carouselIdx >= 1
  const isNextSlideAvailable = carouselIdx <= advertisments.length - 4

  const onSlidePrev = () => {
    swiperRef.current?.slidePrev()
    setCarouselIdx(carouselIdx - 1)
  }

  const onSlideNext = () => {
    swiperRef.current?.slideNext()
    setCarouselIdx(carouselIdx + 1)
  }

  return (
    <div className={styles['advertisment-types-carousel']}>
      <Swiper
        spaceBetween={24}
        slidesPerView='auto'
        className={styles.carousel}
        modules={[Navigation]}
        allowTouchMove={false}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {advertisments.map(({ name, value, growth }) => (
          <SwiperSlide key={name}>
            <AdvertismentType heading={name} value={value} growth={growth} />
          </SwiperSlide>
        ))}
      </Swiper>

      {isPrevSlideAvailable ? (
        <button className={styles['prev-btn']} onClick={onSlidePrev}>
          <ArrowRightIcon />
        </button>
      ) : null}

      {isNextSlideAvailable ? (
        <button className={styles['next-btn']} onClick={onSlideNext}>
          <ArrowRightIcon />
        </button>
      ) : null}
    </div>
  )
}
