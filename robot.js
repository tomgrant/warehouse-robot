const Y_UPPER_LIMIT = 10;
const X_UPPER_LIMIT = 10;
const Y_LOWER_LIMIT = 1;
const X_LOWER_LIMIT = 1;

const movementCommands = ['N', 'S', 'E', 'W'];

/**
 * Handle position updating from the command input accounting for grid bounds
 * 
 * @function
 * @template position
 * @param {position} position 
 * @param {string} command 
 * @returns {position} 
 */
function moveRobot(position, command) {
    switch(command) {
        case 'N':
            if (position.Y < Y_UPPER_LIMIT) {
                position.Y++;
            }
            break;
        case 'S':
            if (position.Y > Y_LOWER_LIMIT) {
                position.Y--;
            }
            break;
        case 'E':
            if (position.X < X_UPPER_LIMIT) {
                position.X++;
            }
            break;
        case 'W':
            if (position.X > X_LOWER_LIMIT) {
                position.X--;
            }
            break;
        default:
            break;
    }
    return position;
}

/**
 * Take the input value and set initial position 
 * 
 * @param {string} commandInput 
 */
function handleCommand(commandInput) {
    // Set initial position of robot
    let position = {
        X: 1,
        Y: 1
    }

    // Split the input value into an array of characters
    const commands = commandInput.split(" ");
    // Iterate through each comman and call moveRobot function
    commands.forEach(command => {
        if (movementCommands.includes(command)) {
            position = moveRobot(position, command);
        }
    });

    return position;
}

if (typeof module != "undefined") { 
    module.exports = handleCommand;
}