import { useState } from "react";
import { FilterDropdown } from "../../components/filter-dropdown/FilterDropdown";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { RESOURCE_TYPES, SKILL_LEVELS } from "../../constants/resources";

export const ResourceListPage = () => {
	const [resourceTypes, setResourceTypes] = useState<string[]>([]);
	const [skillLevels, setSkillLevels] = useState<string[]>([]);

	return (
		<div className="space-y-5">
			<h1 className="text-3xl font-bold text-center text-gray-900">
				React Resource Hub
			</h1>
			<p className="text-gray-600 text-center ">
				Discover high-quality React learning resources
			</p>
			<div className="flex justify-center">
				<SearchBar />
			</div>
			<div className="flex justify-start gap-3">
				<FilterDropdown
					label="Resource Type"
					options={RESOURCE_TYPES}
					selectedOptions={resourceTypes}
					onSelectionChange={setResourceTypes}
				/>
				<FilterDropdown
					label="Skill Level"
					options={SKILL_LEVELS}
					selectedOptions={skillLevels}
					onSelectionChange={setSkillLevels}
				/>
			</div>
		</div>
	);
};
