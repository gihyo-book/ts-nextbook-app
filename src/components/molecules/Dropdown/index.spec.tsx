import {
  render,
  screen,
  act,
  fireEvent,
  RenderResult,
} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Dropdown from '.'
import { theme } from 'themes'

describe('Dropdown', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    // ダミー関数
    handleChange = jest.fn()
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Dropdown
          options={[
            { value: 'used', label: '中古' },
            { value: 'new', label: '新品' },
          ]}
          onChange={handleChange}
        />
      </ThemeProvider>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('ファイルがドロップされたらonDropが呼ばれる', async () => {
    // act関数で囲む事でプルダウンを開いているようにDOMが更新された事を保証する
    await act(async () => {
      // クリックして、ドロップダウンの選択肢のビューを表示
      const element = await screen.findByTestId('dropdown-control')
      element && fireEvent.mouseDown(element)
    })

    // ドロップダウンの選択肢のビューから選択
    const elements = await screen.getAllByTestId('dropdown-option')
    elements && fireEvent.click(elements[0])

    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
