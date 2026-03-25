#include <stdarg.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

/**
 * An Ethereum private-public key pair which can be used for signing messages.
 *
 * # Examples
 *
 * ## Signing and Verifying a message
 *
 * The wallet can be used to produce ECDSA [`Signature`] objects, which can be
 * then verified. Note that this uses [`hash_message`] under the hood which will
 * prefix the message being hashed with the `Ethereum Signed Message` domain separator.
 *
 * ```
 * use ethers_core::rand::thread_rng;
 * use ethers_signers::{LocalWallet, Signer};
 *
 * # async fn foo() -> Result<(), Box<dyn std::error::Error>> {
 * let wallet = LocalWallet::new(&mut thread_rng());
 *
 * // Optionally, the wallet's chain id can be set, in order to use EIP-155
 * // replay protection with different chains
 * let wallet = wallet.with_chain_id(1337u64);
 *
 * // The wallet can be used to sign messages
 * let message = b"hello";
 * let signature = wallet.sign_message(message).await?;
 * assert_eq!(signature.recover(&message[..]).unwrap(), wallet.address());
 * # Ok(())
 * # }
 * ```
 *
 * [`Signature`]: ethers_core::types::Signature
 * [`hash_message`]: fn@ethers_core::utils::hash_message
 */
typedef struct Wallet_SigningKey Wallet_SigningKey;

typedef struct CMnemonicAndAddress {
  const char *mnemonic;
  const char *address;
} CMnemonicAndAddress;

typedef struct CPrivateKey {
  const char *private_key;
  const char *address;
} CPrivateKey;

/**
 * A wallet instantiated with a locally stored private key
 */
typedef struct Wallet_SigningKey LocalWallet;

typedef struct CSignedTransaction {
  const char *signature;
} CSignedTransaction;

char *find_invalid_word(const char *mnemonic);

bool validate_mnemonic(const char *mnemonic);

struct CMnemonicAndAddress generate_mnemonic(void);

void mnemonic_free(struct CMnemonicAndAddress mnemonic);

struct CPrivateKey private_key_from_mnemonic(const char *mnemonic, uint32_t index);

void private_key_free(struct CPrivateKey private_key);

LocalWallet *wallet_from_private_key(const char *private_key);

void wallet_free(LocalWallet *wallet_ptr);

struct CSignedTransaction sign_tx_with_wallet(const LocalWallet *wallet_ptr,
                                              const char *tx_hash,
                                              uint64_t chain_id);

char *sign_message_with_wallet(const LocalWallet *wallet_ptr, const char *message);

char *sign_hash_with_wallet(const LocalWallet *wallet_ptr, const char *hash, uint64_t chain_id);

void string_free(char *string);
