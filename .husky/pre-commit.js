const { execSync } = require('child_process');

try {
  // Run lint command
  execSync('npm run lint', { stdio: 'inherit' });
} catch (error) {
  console.error('Linting failed. Please fix errors before committing.');
  process.exit(1); // Exit with an error code to fail the commit
}
