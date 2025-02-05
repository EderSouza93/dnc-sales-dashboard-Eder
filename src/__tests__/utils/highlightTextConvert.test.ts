import { highlightTextConvert } from '@/utils'

describe('highlightTextConvert', () => {
  it('should return the correct text for "alert"', () => {
    expect(highlightTextConvert('alert')).toBe('* Meta longe de ser batida')
  })

  it('should return the correct text for "success"', () => {
    expect(highlightTextConvert('success')).toBe(
      '* A meta do mês foi batida! Parabéns!'
    )
  })

  it('should return the correct text for "warning"', () => {
    expect(highlightTextConvert('warning')).toBe('* Falta pouco, vamos lá!')
  })

  it('should return the default for unknow imput', () => {
    expect(highlightTextConvert('un')).toBe('* Sem dados no momento')
  })
})
