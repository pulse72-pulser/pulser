import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards ,customerStats,agencyStats } from '@/lib/constants'
import { stripe } from '@/lib/stripe'
import clsx from 'clsx'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  // const prices = await stripe.prices.list({
  //   product: process.env.NEXT_PLURA_PRODUCT_ID,
  //   active: true,
  // })

  const prices = {
    data: [
      {
        id: 'price_1JfL9bKvV8l5qY3mN2kU2Y5P',
        object: 'price',
        active: true,
        billing_scheme: 'per_unit',
        created: 1625852144,
        currency: 'usd',
        livemode: false,
        lookup_key: null,
        metadata: {},
        nickname: 'Unlimited Saas',
        product: 'prod_Jzq0YzC8Q7xYw4',
        recurring: {
          aggregate_usage: null,
          interval: 'month',
          interval_count: 1,
          trial_period_days: null,
        },
        tiers_mode: null,
        transform_quantity: null,
        type: 'recurring',
        unit_amount: 1000,
        unit_amount_decimal: '1000',
      },
      {
        id: 'price_1JfL9bKvV8l5qY3mN2kU2Y5P',
        object: 'price',
        active: true,
        billing_scheme: 'per_unit',
        created: 1625852144,
        currency: 'usd',
        livemode: false,
        lookup_key: null,
        metadata: {},
        nickname: 'Unlimited Saas',
        product: 'prod_Jzq0YzC8Q7xYw4',
        recurring: {
          aggregate_usage: null,
          interval: 'month',
          interval_count: 1,
          trial_period_days: null,
        },
        tiers_mode: null,
        transform_quantity: null,
        type: 'recurring',
        unit_amount: 1000,
        unit_amount_decimal: '1000',
      },
      {
        id: 'price_1JfL9bKvV8l5qY3mN2kU2Y5P',
        object: 'price',
        active: true,
        billing_scheme: 'per_unit',
        created: 1625852144,
        currency: 'usd',
        livemode: false,
        lookup_key: null,
        metadata: {},
        nickname: 'Unlimited Saas',
        product: 'prod_Jzq0YzC8Q7xYw4',
        recurring: {
          aggregate_usage: null,
          interval: 'month',
          interval_count: 1,
          trial_period_days: null,
        },
        tiers_mode: null,
        transform_quantity: null,
        type: 'recurring',
        unit_amount: 1000,
        unit_amount_decimal: '1000',
      },
    
    ],
  }



  return (
    <>
      <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col ">
        {/* grid */}

        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"/>
        <p className="text-center">Run your business, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px]">
            Pulser
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      
      </section>

      <section  className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
      <h4 className="text-6xl font-bold text-center">
    Elevate Your Business with Pulser CRM System
  </h4>
  <p className="text-xl text-center">
    Empowering businesses with cutting-edge AI and proximity-based customer relations.
  </p>
  <p className="text-lg text-center mb-4">
    Connect with the future of customer relationship management.
  </p>

  {/* Card Details */}
  <div className="grid grid-cols-2 gap-4 mb-8">
    {/* Customers Card */}
    <div className="bg-white rounded-lg shadow-md p-6">
      <h4 className="text-3xl font-bold mb-4">{customerStats[0].title}</h4>
      <p className="text-xl mb-4">
        {customerStats[0].value} registered in the Pulser.
      </p>
      {/* Additional Customer Statistics */}
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500">{customerStats[1].title}</p>
          <p className="text-xl font-bold">{customerStats[1].value}</p>
        </div>
        <div>
          <p className="text-gray-500">{customerStats[2].title}</p>
          <p className="text-xl font-bold">{customerStats[2].value}</p>
        </div>
      </div>
    </div>

    {/* Agencies Card */}
    <div className="bg-white rounded-lg shadow-md p-6">
      <h4 className="text-3xl font-bold mb-4">{agencyStats[0].title}</h4>
      <p className="text-xl mb-4">
        {agencyStats[0].value} leveraging Pulser CRM for their operations.
      </p>
      {/* Additional Agency Statistics */}
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500">{agencyStats[1].title}</p>
          <p className="text-xl font-bold">{agencyStats[1].value}</p>
        </div>
        <div>
          <p className="text-gray-500">{agencyStats[2].title}</p>
          <p className="text-xl font-bold">{agencyStats[2].value}</p>
        </div>
      </div>
    </div>
  </div>
  
  {/* Additional Text */}
  <p className="text-lg text-center">
    Revolutionize your business relationships with Pulser CRM, where AI meets proximity for seamless connections.
  </p>

      </section>
      
      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
        <h2 className="text-4xl text-center"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </p>
        <div className="flex  justify-center gap-4 flex-wrap mt-6">
          {prices.data.map((card) => (
            //WIP: Wire up free product from stripe
            <Card
              key={card.nickname}
              className={clsx('w-[300px] flex flex-col justify-between', {
                'border-2 border-primary': card.nickname === 'Unlimited Saas',
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx('', {
                    'text-muted-foreground': card.nickname !== 'Unlimited Saas',
                  })}
                >
                  {card.nickname}
                </CardTitle>
                <CardDescription>
                  {
                    pricingCards.find((c) => c.title === card.nickname)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">
                  {card.unit_amount && card.unit_amount / 100}
                </span>
                <span className="text-muted-foreground">
                  <span>/ {card.recurring?.interval}</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {pricingCards
                    .find((c) => c.title === card.nickname)
                    ?.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-2"
                      >
                        <Check />
                        <p>{feature}</p>
                      </div>
                    ))}
                </div>
                <Link
                  href={`/agency?plan=${card.id}`}
                  className={clsx(
                    'w-full text-center bg-primary p-2 rounded-md',
                    {
                      '!bg-muted-foreground':
                        card.nickname !== 'Unlimited Saas',
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
          <Card className={clsx('w-[300px] flex flex-col justify-between')}>
            <CardHeader>
              <CardTitle
                className={clsx({
                  'text-muted-foreground': true,
                })}
              >
                {pricingCards[0].title}
              </CardTitle>
              <CardDescription>{pricingCards[0].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">$0</span>
              <span>/ month</span>
            </CardContent>
            <CardFooter className="flex flex-col  items-start gap-4 ">
              <div>
                {pricingCards
                  .find((c) => c.title === 'Starter')
                  ?.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex gap-2"
                    >
                      <Check />
                      <p>{feature}</p>
                    </div>
                  ))}
              </div>
              <Link
                href="/agency"
                className={clsx(
                  'w-full text-center bg-primary p-2 rounded-md',
                  {
                    '!bg-muted-foreground': true,
                  }
                )}
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  )
}