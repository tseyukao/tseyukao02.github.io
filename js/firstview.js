const canvas = document.getElementById("gradientCanvas");
const ctx = canvas.getContext("2d");

function drawGradientCircle(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 50;
  const startAngle = 0;
  const endAngle = (time / 1000) * Math.PI * 2; // Time-dependent rotation

  const gradient = ctx.createConicGradient(centerX, centerY, startAngle);
  gradient.addColorStop(0, "#ff7e5f");
  gradient.addColorStop(0.5, "#feb47b");
  gradient.addColorStop(1, "#ff7e5f");

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.fillStyle = gradient;
  ctx.fill();

  requestAnimationFrame(drawGradientCircle);
}

requestAnimationFrame(drawGradientCircle);
