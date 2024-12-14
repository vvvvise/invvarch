import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Career } from "../../../models/Career";
import { ExpertiseList } from "../../../models/ExpertiseList";
import { Individual } from "../../../models/Individual";
import { User } from "../../../models/User";
import { IndividualCareerArgs } from "./args/IndividualCareerArgs";
import { IndividualExpertiseListArgs } from "./args/IndividualExpertiseListArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Individual)
export class IndividualRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() individual: Individual, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.findUniqueOrThrow({
      where: {
        id: individual.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ExpertiseList, {
    nullable: true
  })
  async expertiseList(@TypeGraphQL.Root() individual: Individual, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IndividualExpertiseListArgs): Promise<ExpertiseList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.findUniqueOrThrow({
      where: {
        id: individual.id,
      },
    }).expertiseList({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Career, {
    nullable: true
  })
  async career(@TypeGraphQL.Root() individual: Individual, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IndividualCareerArgs): Promise<Career | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.findUniqueOrThrow({
      where: {
        id: individual.id,
      },
    }).career({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
