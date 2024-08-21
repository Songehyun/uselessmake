const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async function (event) {
  for (const record of event.Records) {
    if (record.eventName === 'INSERT') {
      const newItem = AWS.DynamoDB.Converter.unmarshall(
        record.dynamodb.NewImage,
      );
      const name = newItem.name;
      const totalMoney = newItem.totalmoney;

      // 여기에 순위 계산 로직 추가
      console.log(`New record added: ${name} with total money: ${totalMoney}`);

      // 예: 순위를 업데이트하는 코드 추가
      // await dynamodb.put({
      //     TableName: 'RankingsTable',
      //     Item: {
      //         id: ...,
      //         name: name,
      //         totalmoney: totalMoney,
      //         rank: ...
      //     }
      // }).promise();
    }
  }
};
