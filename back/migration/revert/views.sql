-- Revert arkeos:views from pg

BEGIN;

DROP VIEW "article_without_breeder", "article_breeder", "marketplace_view", "user_view", "chat_view";

COMMIT;
