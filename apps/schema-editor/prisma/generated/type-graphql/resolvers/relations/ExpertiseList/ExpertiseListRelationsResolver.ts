import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ExpertiseList } from "../../../models/ExpertiseList";
import { ExpertiseTag } from "../../../models/ExpertiseTag";
import { Individual } from "../../../models/Individual";
import { ExpertiseListTagsArgs } from "./args/ExpertiseListTagsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseList)
export class ExpertiseListRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ExpertiseTag], {
    nullable: false
  })
  async tags(@TypeGraphQL.Root() expertiseList: ExpertiseList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ExpertiseListTagsArgs): Promise<ExpertiseTag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.findUniqueOrThrow({
      where: {
        id: expertiseList.id,
      },
    }).tags({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Individual, {
    nullable: false
  })
  async individual(@TypeGraphQL.Root() expertiseList: ExpertiseList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Individual> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.findUniqueOrThrow({
      where: {
        id: expertiseList.id,
      },
    }).individual({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
