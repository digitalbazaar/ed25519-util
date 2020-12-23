/*!
 * Copyright (c) 2020 Digital Bazaar, Inc. All rights reserved.
 */
import chai from 'chai';
chai.should();

const bs58 = require('base58-universal');
import {privateKeyDerEncode, publicKeyDerEncode} from '..';

const mockKey = {
  publicKeyBase58: 'DggG1kT5JEFwTC6RJTsT6VQPgCz1qszCkX5Lv4nun98x',
  privateKeyBase58: 'sSicNq6YBSzafzYDAcuduRmdHtnrZRJ7CbvjzdQhC45ewwv' +
    'QeuqbM2dNwS9RCf6buUJGu6N3rBy6oLSpMwha8tc'
};

const privateKeyBytes = bs58.decode(mockKey.privateKeyBase58);
const publicKeyBytes = bs58.decode(mockKey.publicKeyBase58);

const targetPrivateDerBytesBase64 =
  'MC4CAQAwBQYDK2VwBCIEICuAHzsgGqFh8BWmT1iucnc0w4mS5KfnfnaOtHG6yWuA';
const targetPublicDerBytesBase64 =
  'MCowBQYDK2VwAyEAvHZI57pFMs4OnJfkcp0QSotH9LbDT/6yRtYKt/ZpUpU=';

describe('Ed25519 Keys', () => {
  describe('Ed25519 Private Key', () => {
    describe('DER encoding', () => {
      it('works properly', async () => {
        const privateDer = privateKeyDerEncode({privateKeyBytes});
        const privateDerBytesBase64 = Buffer.from(privateDer).toString(
          'base64');
        privateDerBytesBase64.should.equal(targetPrivateDerBytesBase64);
      });
    }); // end DER encoding
  }); // end Ed25519 Private Key

  describe('Ed25519 Public Key', () => {
    describe('DER encoding', () => {
      it('works properly', async () => {
        const publicDer = publicKeyDerEncode({publicKeyBytes});
        const publicDerBytesBase64 = Buffer.from(publicDer).toString('base64');
        publicDerBytesBase64.should.equal(targetPublicDerBytesBase64);
      });
    }); // end DER encoding
  }); // end Ed25519 Private Key
});

