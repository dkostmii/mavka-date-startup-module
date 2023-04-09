const mavka = getMavka()
const context = getContext()

const dateConstructorDiia = context.get("Дата")

if (!(dateConstructorDiia.isInstanceOf(mavka.diiaStructureCellInstance))) {
  mavka.fall(context, mavka.makeText("Очікується, що \"Дата\" є дією-конструктором структури Дата."))
}

dateConstructorDiia.set(context, "зараз", mavka.makeProxyFunction((args, context) => {
  const nowValue = new Date();

  const constructorArgs = {
    "рік": nowValue.getFullYear(),
    "місяць": nowValue.getMonth() + 1,
    "день": nowValue.getDate(),
    "година": nowValue.getHours(),
    "хвилина": nowValue.getMinutes(),
    "секунда": nowValue.getSeconds(),
    "мілісекунда": nowValue.getMilliseconds()
  };

  Object.keys(constructorArgs).forEach(k => {
    constructorArgs[k] = mavka.toCell(constructorArgs[k])
  })

  return dateConstructorDiia.doCall(context, constructorArgs)
}))
