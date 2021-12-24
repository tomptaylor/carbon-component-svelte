<script>
  import "carbon-components-svelte/css/all.css";
  import {
    Header,
    SkipToContent,
    HeaderUtilities,
    Content,
    Grid,
    Row,
    Column
  } from "carbon-components-svelte";
  import HeaderActionLink from "./components/HeaderActionLink.svelte";
  import LogoGithub20 from "carbon-icons-svelte/lib/LogoGithub20";
  import Table from "./components/Table.svelte";
</script>

<style>
	:global(#main-content.bx--content) {
	  background: none;
	}
</style>

<Header>
	<div slot="skip-to-content">
		<SkipToContent />
	</div>
	<div slot="platform">
		Carbon Template
	</div>

	<HeaderUtilities>
		<HeaderActionLink href="https://github.com/IBM/carbon-components-svelte/"
			icon={LogoGithub20}>
		</HeaderActionLink>
	</HeaderUtilities>
</Header>

<Content>
	<Grid>
		<Row>
			<Column>
				<Table/>
			</Column>
		</Row>
	</Grid>
</Content>