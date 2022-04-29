<script lang="ts">
import {
  Argon2HashingAlgorithm,
  SupabaseStatisticsCollector,
} from "@/infrastructure";
import { createClient } from "@supabase/supabase-js";
import useDomainRepositories from "./useDomainRepositories.vue";

const supabaseClient = createClient(
  // eslint-disable-next-line
  process.env.VUE_APP_SUPABASE_URL!,
  // eslint-disable-next-line
  process.env.VUE_APP_SUPABASE_ANON_KEY!
);

export default function useApplicationPorts() {
  const { storageApiQueueRepository } = useDomainRepositories();

  const hashingAlgorithm = Argon2HashingAlgorithm.create();
  const statisticsCollector = SupabaseStatisticsCollector.create(
    storageApiQueueRepository,
    supabaseClient
  );

  return {
    hashingAlgorithm,
    statisticsCollector,
  };
}
</script>
