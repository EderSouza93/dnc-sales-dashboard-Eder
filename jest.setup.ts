import { TextEncoder, TextDecoder } from 'util'
import '@testing-library/jest-dom'
import 'jest-styled-components'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
