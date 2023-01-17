const animations = ["/", "-", "\\", "|", "/", "-", "\\", "|", "\n"];
let delay = 100;
for (const char of animations) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delay)
  delay += 200;
}