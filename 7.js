const initialVolume = 5832;

function calculate(x) {
    const days = 7;
    let remainingVolume = x;

    for (let i = 0; i < days; i++) {
        remainingVolume -= remainingVolume / 3;
    }
    return remainingVolume;
}

const remainingVolume = calculate(initialVolume);
console.log(`น้ำที่เหลืออยู่ในถังหลังจากครบสัปดาห์: ${remainingVolume.toFixed(2)} ลิตร`);
