const handleCommand = require('./robot');

test('Moves robot to the centre of the room', () => {
    expect(handleCommand('N E N E N E N E')).toStrictEqual({ X: 5, Y: 5 });
});

test('Moves robot in a square, ending at the starting spot', () => {
    expect(handleCommand('N E S W')).toStrictEqual({ X: 1, Y: 1 });
});

test('Moves robot comands to move outside of circle will be prevented from moving out of bounds', () => {
    expect(handleCommand('S W')).toStrictEqual({ X: 1, Y: 1 });
});

test('Moves robot moves to vertical favoured position', () => {
    expect(handleCommand('N E N N')).toStrictEqual({ X: 2, Y: 4 });
});

test('Moves robot moves to horizontal favoured position', () => {
    expect(handleCommand('E E N E')).toStrictEqual({ X: 4, Y: 2 });
});