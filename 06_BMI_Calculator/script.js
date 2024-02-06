const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const submit = document.querySelector('button')
const bmiVal = document.querySelector('.bmi-value')
const bmiCat = document.querySelector('.bmi-category')

const bindData = (obj) => {
    const { bmi, category } = obj;
    bmiVal.textContent = `Your BMI score is ${bmi.toFixed(2)}`;
    bmiCat.textContent = `Your category is ${category}`;
}

const categoryCheck = (bmiValue) => {
    if (bmiValue < 18.5) {
        return 'Underweight';
    } else if (bmiValue < 24.9) {
        return 'Normal weight';
    } else if (bmiValue < 29.9) {
        return 'Overweight';
    } else if (bmiValue < 34.9) {
        return 'Obesity Class I';
    } else if (bmiValue < 39.9) {
        return 'Obesity Class II';
    } else {
        return 'Obesity Class III';
    }
}

const calculateBMI = (userHeight, userWeight) => {
    const bmiValue = userWeight / Math.pow(userHeight, 2);

    const category = categoryCheck(bmiValue);
    const bmiObject = {
        bmi: bmiValue,
        category: category
    }
    bindData(bmiObject);
}


submit.addEventListener('click', () => {
    const userHeight = height.value / 100;
    const userWeight = weight.value;
    calculateBMI(userHeight, userWeight)
})