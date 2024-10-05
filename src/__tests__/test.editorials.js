const { expect, test, beforeEach } = require('@jest/globals');
const editorialController = require('../controllers/editorialController')

jest.mock('../controllers/editorialController', () => ({
    getEditorials: jest.fn()
}))


beforeEach(() => {
    jest.clearAllMocks()
})

test('Testing length editorials', async () => {
    const mockEditorials = [
        {id: 1, name: 'Editorial 1', status: 1},
        {id: 2, name: 'Editorial 2', status: 1}
    ]

    editorialController.getEditorials.mockResolvedValue(mockEditorials)

    const editorials = await editorialController.getEditorials()
    expect(editorialController.getEditorials).toHaveBeenCalled();
    expect(editorials.length).toEqual(2)
})

