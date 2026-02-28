const { execSync } = require('child_process'); try { execSync('npm run build', { stdio: 'pipe' }); } catch (e) { console.error(e.stdout.toString(), e.stderr.toString()); }
