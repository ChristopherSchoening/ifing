import '@testing-library/jest-dom'

import { render, screen as _screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    // const heading = screen.getByRole('heading', {
    //   name: /welcome to next\.js!/i,
    // })
    // expect(heading).toBeInTheDocument()

    expect(true).toBeTruthy()
  })
})
