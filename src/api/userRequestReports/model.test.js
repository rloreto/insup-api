import { UserRequestReports } from '.'

let userRequestReports

beforeEach(async () => {
  userRequestReports = await UserRequestReports.create({ username: 'test', date: 'test', days: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = userRequestReports.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(userRequestReports.id)
    expect(view.username).toBe(userRequestReports.username)
    expect(view.date).toBe(userRequestReports.date)
    expect(view.days).toBe(userRequestReports.days)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = userRequestReports.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(userRequestReports.id)
    expect(view.username).toBe(userRequestReports.username)
    expect(view.date).toBe(userRequestReports.date)
    expect(view.days).toBe(userRequestReports.days)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
