document.addEventListener("DOMContentLoaded", function () {
  const instanceType = document.getElementById("instanceType");
  const hours = document.getElementById("hours");
  const storage = document.getElementById("storage");
  const result = document.getElementById("result");
  const button = document.getElementById("calculateBtn");

  button.addEventListener("click", function () {
    const hourlyRate = parseFloat(instanceType.value);
    const usedHours = parseFloat(hours.value);
    const usedStorage = parseFloat(storage.value);

    if (isNaN(hourlyRate) || isNaN(usedHours) || isNaN(usedStorage)) {
      result.textContent = "Please enter valid numbers in all fields.";
      result.style.color = "red";
      return;
    }

    const instanceCost = hourlyRate * usedHours;
    const storageCost = 0.10 * usedStorage;
    const totalCost = (instanceCost + storageCost).toFixed(2);

    result.textContent = `Estimated Monthly Cost: $${totalCost}`;
    result.style.color = "#27ae60";
  });
});
