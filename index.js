function calculateTax(income, expenses) {
  if (
    typeof income === "number" &&
    !isNaN(income) &&
    typeof expenses === "number" &&
    !isNaN(expenses)
  ) {
    if (income >= expenses && income >= 0 && expenses >= 0) {
      const costDifference = income - expenses;

      const payableTax = costDifference * 0.2;

      return payableTax;
    } else {
      return "Invalid Input";
    }
  } else {
    return "Invalid Input";
  }
}

function sendNotification(email) {
  if (typeof email === "string") {
    if (email.indexOf("@") !== -1) {
      const emailParts = email.split("@");

      const notification =
        emailParts[0] + " " + "sent you an email from " + " " + emailParts[1];

      return notification;
    } else {
      return "Invalid Email";
    }
  } else {
    return "Invalid Email";
  }
}

function checkDigitsInName(name) {
  if (typeof name === "string") {
    for (i = 0; i < name.length; i++) {
      if (!isNaN(name[i])) {
        return true;
      }
    }

    return false;
  } else {
    return "Invalid Input ";
  }
}

function calculateFinalScore(obj) {
  if (typeof obj === "object") {
    const testScore = obj.testScore;

    const schoolGrade = obj.schoolGrade;

    let isFFamily;

    if (obj.isFFamily === true) {
      isFFamily = 20;
    } else {
      isFFamily = 0;
    }

    const totalMark = testScore + schoolGrade + isFFamily;

    if (testScore <= 50 && schoolGrade <= 30 && isFFamily <= 20) {
      if (totalMark >= 80) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return "Invalid Input";
  }
}

function waitingTime(waitingTimes, serialNumber) {
  const checkIsArray = Array.isArray(waitingTimes);

  const checkIsNumber =
    typeof serialNumber === "number" && !isNaN(serialNumber);

  if (checkIsArray === true && checkIsNumber === true) {
    let totalInterviewTimes = 0;

    for (let time of waitingTimes) {
      totalInterviewTimes += time;
    }

    const averageInterviewTime = Math.round(
      totalInterviewTimes / waitingTimes.length
    );

    const totalWaitingForInterview = serialNumber - waitingTimes.length - 1;

    const totalWaitingTimes = averageInterviewTime * totalWaitingForInterview;

    return totalWaitingTimes;
  } else {
    return "Invalid Input";
  }
}
