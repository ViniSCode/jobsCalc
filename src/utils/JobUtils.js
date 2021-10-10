module.exports = {
  remainingDays(job) {
    // ajustes no job
    // calculo de tempo restante - (toFixed() arredondar  12.9 = 13)
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
    //data de criação do job
    const createdDate = new Date(job.created_at);

    //get date. pegar o dia e somar qual é o dia da entrega do projeto
    const dueDay = createdDate.getDate() + Number(remainingDays);

    //criar uma data com um dia
    const dueDateInMs = createdDate.setDate(dueDay);

    // diferença do tempo da entrega menos o tempo de agora em ms
    const timeDiffInMs = dueDateInMs - Date.now();

    //transformar ms em dias
    const dayInMs = 1000 * 60 * 60 * 24;

    //diferença entre os dias
    const dayDiff = Math.ceil(timeDiffInMs / dayInMs);

    return dayDiff;
  },
  calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
};
