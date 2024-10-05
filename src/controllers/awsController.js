const AWS = require('aws-sdk')


const s3 = new AWS.S3()

const getBuckets = async (request, response) => {
    s3.listBuckets((err, data) => {
        if(err) {
            reject(err)
        } else {
            response.json(data.Buckets)
        }
    })
}

const getObjectsByBucket = async (request, response) => {
    const { bucketName } = request.query;

    const params = {
        Bucket: bucketName,
        Delimiter: '/'
    }

    const data = await s3.listObjects(params).promise()
    response.json(data.Contents)    
 }

module.exports = {
    getBuckets: getBuckets,
    getObjectsByBucket: getObjectsByBucket
}