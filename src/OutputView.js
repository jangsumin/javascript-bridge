const { Console } = require("@woowacourse/mission-utils");
const { PROMPT, WORD } = require("./Constants/Constants");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(PROMPT.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(sketch) {
    Console.print(`${WORD.LEFT_BRACKET} ${sketch[0]} ${WORD.RIGHT_BRACKET}`);
    Console.print(`${WORD.LEFT_BRACKET} ${sketch[1]} ${WORD.RIGHT_BRACKET}${WORD.NEW_LINE}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
  printErrorMessage(error) {
    Console.print(error);
  }
};

module.exports = OutputView;
