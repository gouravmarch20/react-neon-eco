import { v4 as uuid } from 'uuid'

/**
 * Product Database can be added here.
 * */
// TODO: PRODUCT DETAIL , SPECFIACAITION  , FAQ detail

export const products = [
  {
    _id: uuid(),
    id: 1,
    title: 'arihant reasoning',
    brand: 'arihant',
    price: 911,
    priceMrp: 1530,
    categoryName: 'Book',
    inStock: 12,
    featured: true,
    rating: 2.6,
    noOfItemInCart: 1,
    description:
      ' New Approach to Reasoning - Verbal, Non - Verbal & Analytical - Verbal, Non - Verbal & Analytical - Verbal, Non - Verbal & Analytical REVISED EDITION Edition  (English, Paperback, Sijwalii B.S.)',
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kbcjpu80/book/1/0/3/a-new-approach-to-reasoning-verbal-non-verbal-original-imafspq636zdqwea.jpeg?q=70'
  },
  {
    _id: uuid(),
    id: 2,
    title: 'A5 Diary',
    brand: 'DI-KRAFT ',
    description: `
    Amazing range of Handcrafted, Handmade Notebook colorful diary. This colorful diary makes a writing experience very fulfilling, each word written in this Diary gives you a feel of writing a manuscript to be save for future generations.
    `,
    price: 711,
    priceMrp: 830,
    categoryName: 'Notebook',
    inStock: 12,
    featured: true,
    rating: 3.6,
    noOfItemInCart: 1,

    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/ky90scw0/diary-notebook/a/n/2/3ds-notebook-90-gsm-premium-grade-paper-a5-ruled-80-pages-each-original-imagagdfu9abqkgr.jpeg?q=70'
  },
  {
    _id: uuid(),
    id: 3,
    title: 'Reynolds  ',
    brand: 'Reynolds',
    price: 233,
    priceMrp: 530,
    categoryName: 'Pen',
    inStock: 12,
    featured: true,
    rating: 3.2,
    noOfItemInCart: 1,
    description:
      'Special ink for super smooth writing Textured grip for super grasp',
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/ktuewsw0/pen/n/0/9/2083295-reynolds-original-imag73htv9xkh4ud.jpeg?q=70'
  },
  {
    _id: uuid(),
    id: 4,
    title: 'Pilot V5  ',
    brand: 'Pilot',
    price: 333,
    priceMrp: 630,
    categoryName: 'Pen',
    inStock: 12,
    featured: true,
    rating: 5,
    noOfItemInCart: 1,
    description:
      'Pilot V5 (Pack of 3) Liquid Ink Rollerball Pen  (Pack of 3, Blue, Black).  Regardless of whether you are a student, a professional or a housewife, it is necessary that you always keep a pen handy. This set of Pilot pens is made for the express purpose of bringing together functionality and ease of use.      ',
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kbdz5ow0/pen/m/c/y/pilot-9000014706-9000014706-original-imafsqxhv9zk74tc.jpeg?q=70'
  },
  {
    _id: uuid(),
    id: 5,
    title: 'Reynolds Trimax',
    brand: 'Reynolds',
    price: 399,
    priceMrp: 400,
    categoryName: 'Pen',
    inStock: 12,
    featured: true,
    rating: 2.6,
    noOfItemInCart: 1,
    description: `Discover max writing length, max precision, and max smoothness with the Reynolds Trimax Gel Pen. These gel ink pens have a refillable fluid ink system for a smooth writing experience. They come with a fine 0.5 mm tip to give you incredible precision whether you're writing or illustrating. Plus, the waterproof ink keeps your work safe from spills. The Trimax Gel Pen also comes in a stylish, pocketable design, so you can write as you go. Each order comes with 5 Reynolds pens in blue gel ink.
    `,
    cashOnDelivery: true,
    assuredProuduct: false,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kle24cw0/pen/u/g/f/trimax-liquid-gel-pens-needle-point-0-5mm-blue-ink-set-of-10-pcs-original-imagygtynnfkdpx9.jpeg?q=70'
  },
  {
    _id: uuid(),
    id: 6,
    title: 'atomic habits',
    brand: 'pi-pack',
    price: 459,
    priceMrp: 500,
    categoryName: 'Book',
    inStock: 12,
    featured: true,
    rating: 2.6,
    noOfItemInCart: 1,
    description: `THE PHENOMENAL INTERNATIONAL BESTSELLER: 1 MILLION COPIES SOLD Transform your life with tiny changes in behaviour, starting now. People think that when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions: doing two push-ups a day, waking up five minutes early, or holding a single short phone call. `,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70'
  },
  {
    _id: uuid(),
    id: 7,
    title: 'subconscious ',
    brand: 'pi-pack',
    price: 450,
    priceMrp: 600,
    categoryName: 'Book',
    inStock: 12,
    featured: true,
    rating: 3.1,
    noOfItemInCart: 1,
    description:
      "In this book, 'The power of your subconscious mind', the author fuses his spiritual wisdom and scientific research to bring to light how the sub-conscious mind can be a major influence on our daily lives. Once you understand your subconscious mind, you can also control or get rid of the various phobias that you may have in turn opening a brand new world of positive energy.",
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/ki214sw0-0/book/n/w/g/the-power-of-your-subconscious-mind-original-imafxxvxsgzgd7gq.jpeg?q=70'
  },
  {
    _id: uuid(),
    id: 8,
    title: 'pratical notebook',
    brand: 'classmate',
    price: 259,
    priceMrp: 300,
    categoryName: 'Notebook',
    inStock: 12,
    featured: false,
    rating: 4.2,
    noOfItemInCart: 1,
    description: `This book by Dr. Joseph Murphy teaches you to unlock the powers of your subconscious mind. He combines spiritual wisdom with scientific research, and explains how the subconscious mind influences every single thing that you do. From getting rid of bad habits to getting that promotion you want, this book will change your life and open up doors to happiness, success, prosperity and peace.

`,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/khf63680/diary-notebook/r/4/b/classmate-02001283qqdm-original-imafxft8gg5ab5vf.jpeg?q=70'
  },
  {
    _id: uuid(),
    id: 9,
    title: 'math class 10',
    brand: 'ncert',
    price: 390,
    priceMrp: 700,
    categoryName: 'Book',
    inStock: 12,
    featured: false,
    rating: 4,
    noOfItemInCart: 1,
    description: `0th Maths NCERT book? Looking for a perfect book to help you reach your potential for the upcoming Class 10 Maths exam? Target’s Class 10 Maths NCERT is an ideal book for students appearing for CBSE exams. This CBSE 10th Maths book aims to provide comprehensive and thorough preparation material for students to excel in the exam.`,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/regionalbooks/n/n/n/ncert-mathematics-books-set-class-6-to-10-english-medium-original-imaftk93xf2upfbg.jpeg?q=70'
  },
  {
    _id: uuid(),
    id: 10,
    title: 'Graph Paper ',
    brand: 'Woodsnipe',
    price: 899,
    priceMrp: 1500,
    categoryName: 'Notebook',
    inStock: 12,
    featured: false,
    rating: 3,
    noOfItemInCart: 1,
    cashOnDelivery: true,
    description: `
    Teaching charts & graphs to students can be a lot of fun! These books are clever and entertaining, and teach important math at the same time. Woodsnipes Graph Notebooks can help students to arrange large sums of data into visual form for easy understanding. Our Graph book is India’s 1st Graph Book with numbered pages. `,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/l0mr7gw0/diary-notebook/x/h/q/-original-imagcdj2azcsgex4.jpeg?q=70'
  },
  {
    _id: uuid(),
    id: 11,
    title: 'classmate diary',
    brand: 'classmate',
    price: 699,
    priceMrp: 800,
    categoryName: 'Notebook',
    inStock: 12,
    featured: true,
    rating: 2.1,

    cashOnDelivery: true,
    noOfItemInCart: 1,
    description: `Classmate Diaries & Notebooks ; Classmate Pulse A5 Notebook Single Line 300 Pages ; Classmate Pulse Flexi Planner Hard Cover 80 GSM: A5 Journal Unruled 176 Pages.
`,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/jynat8w0/diary-notebook/h/j/g/classmate-2001235-original-imafgu2fhd94ujfe.jpeg?q=70'
  }
]
