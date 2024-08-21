const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async function (event) {
  try {
    for (const record of event.Records) {
      if (record.eventName === 'INSERT') {
        const newItem = AWS.DynamoDB.Converter.unmarshall(
          record.dynamodb.NewImage,
        );
        const name = newItem.name;
        const totalMoney = newItem.totalmoney;

        // 로그 출력
        console.log(
          `New record added: ${name} with total money: ${totalMoney}`,
        );

        // 순위를 계산하는 로직을 추가
        const rank = await calculateRank(totalMoney);

        // 랭킹 정보를 다른 테이블에 저장할 수도 있지만, 현재는 기존 테이블에 저장한다고 가정
        await dynamodb
          .put({
            TableName: 'Rankingstable-songdev', // 기존 테이블 이름
            Item: {
              name: name,
              totalmoney: totalMoney,
            },
          })
          .promise();

        console.log(
          `Item updated in DynamoDB with name: ${name} and total money: ${totalMoney}`,
        );
      }
    }
  } catch (error) {
    console.error('Error processing DynamoDB event:', error);
    throw error;
  }
};

// 순위를 계산하는 예시 함수
async function calculateRank(totalMoney) {
  // 순위 계산 로직을 여기에 구현합니다.
  // 예시로, totalMoney가 많을수록 높은 순위로 가정
  // 실제로는 다른 로직을 사용할 수 있습니다.
  return Math.floor(Math.random() * 100); // 임시로 랜덤 값 반환
}
