import { generateComponents } from '@uploadthing/react'
import { generateReactHelpers } from '@uploadthing/react/hooks'

import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// import type { OurFileRouter } from '@/app/api/uploadthing/core'
import type { OurFileRouter } from '@/api/uploadthing/core'

// export const { UploadButton, UploadDropzone, Uploader } =
//   generateComponents<OurFileRouter>()

// export const { useUploadThing, uploadFiles } =
//   generateReactHelpers<OurFileRouter>()

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
