const {doTask, syncTask, OddError} = require('./async-try-catch');

describe(' errors', () => {
  it('must be even', async() => {
    expect.assertions(2)
    try {
      await doTask(3);
    } catch (error) {
      expect(error.message).toEqual('amount must be even')
    }
    expect(() => syncTask()).toThrow()
  });

  it('rejects', async () => {
    await expect(doTask(3)).rejects.toThrow(OddError);
  });
 /*  it('rejects', async () => { */
    /* expect(async () => await doTask(3)).toThrow(OddError); */
  /* }); */

  it('ok', async() => {
     expect(await doTask(4)).toEqual(2)
  })
})
