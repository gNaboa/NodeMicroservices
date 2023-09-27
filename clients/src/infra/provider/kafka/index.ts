import {Kafka} from 'kafkajs'

export const kafka = new Kafka({
    brokers: ['guiding-antelope-11116-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'Z3VpZGluZy1hbnRlbG9wZS0xMTExNiSbqvMfD58-Qe7OOsHU1eqffT8RLmkEmQI',
      password: '********',
    },
    ssl: true,
  })
   