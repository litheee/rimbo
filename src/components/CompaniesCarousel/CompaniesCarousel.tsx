import { useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import { CompanyCard } from 'components'

import 'swiper/css'
import styles from './CompaniesCarousel.module.scss'

import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow-right.svg'

const companies = [
  {
    id: 0,
    name: 'Company name 1',
    impressions: 55153,
    spent: 731.54,
    clicks: 1312
  },
  {
    id: 1,
    name: 'Company name 2',
    impressions: 55154,
    spent: 732.54,
    clicks: 1313
  },
  {
    id: 2,
    name: 'Company name 3',
    impressions: 55155,
    spent: 733.54,
    clicks: 1314
  },
  {
    id: 3,
    name: 'Company name 4',
    impressions: 55156,
    spent: 734.54,
    clicks: 1315
  },
  {
    id: 4,
    name: 'Company name 5',
    impressions: 55157,
    spent: 735.54,
    clicks: 1316
  },
  {
    id: 5,
    name: 'Company name 6',
    impressions: 55158,
    spent: 736.54,
    clicks: 1317
  },
  {
    id: 6,
    name: 'Company name 7',
    impressions: 55159,
    spent: 737.54,
    clicks: 1318
  },
  {
    id: 7,
    name: 'Company name 8',
    impressions: 55160,
    spent: 738.54,
    clicks: 1319
  }
]

export const CompaniesCarousel = () => {
  const swiperRef = useRef<SwiperType>()
  const [companySelectedId, setCompanySelectedId] = useState<number | null>(null)
  const [carouselIdx, setCarouselIdx] = useState(0)

  const isPrevSlideAvailable = carouselIdx >= 1
  const isNextSlideAvailable = carouselIdx <= companies.length - 4

  const onSlidePrev = () => {
    swiperRef.current?.slidePrev()
    setCarouselIdx(carouselIdx - 1)
  }

  const onSlideNext = () => {
    swiperRef.current?.slideNext()
    setCarouselIdx(carouselIdx + 1)
  }

  return (
    <div className={styles['companies-carousel-container']}>
      <Swiper
        spaceBetween={24}
        slidesPerView={4}
        modules={[Navigation]}
        className={styles['companies-carousel']}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {companies.map(({ id, name, impressions, spent, clicks }) => (
          <SwiperSlide key={id}>
            <CompanyCard
              isActive={companySelectedId === id}
              name={name}
              impressions={impressions}
              spent={spent}
              clicks={clicks}
              onClick={() => {
                setCompanySelectedId(id)
              }}
            />
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
