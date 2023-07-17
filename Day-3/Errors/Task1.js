const value = 100;
const nearLimit = 90;
const limit = 100;

try {
  if (value > nearLimit) {
    throw new Error("Value is greater than the near limit.");
  }

} catch (error) {
  if (value > nearLimit) {
    console.log('Warning: '+error.message);
  }
  if (value > limit) {
    throw error;
  }
}
